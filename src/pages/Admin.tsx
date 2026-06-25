import { useEffect, useMemo, useState } from "react";
import { Query } from "appwrite";
import { DATABASE_ID, databases, WAITLIST_COLLECTION_ID } from "../components/lib/appwrite";
import { toast } from "react-toastify";

const ADMIN_PASSWORD = "wolfgng2026";

interface Subscriber {
  $id: string;
  $createdAt: string;
  email: string;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState<Subscriber[]>([]);
  const [search, setSearch] = useState("");

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      toast("Wrong password");
    }
  };

  const loadEmails = async () => {
    try {
      setLoading(true);

      const response = await databases.listDocuments(
        DATABASE_ID,
        WAITLIST_COLLECTION_ID,
        [Query.orderDesc("$createdAt")]
      );

      setEmails(response.documents as unknown as Subscriber[]);
    } catch (error) {
      console.error(error);
      toast("Failed to load waitlist");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) {
      loadEmails();
    }
  }, [authorized]);

  const filteredEmails = useMemo(() => {
    return emails.filter((item) =>
      item.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [emails, search]);

  const exportCSV = () => {
    const headers = ["Email", "Joined"];

    const rows = filteredEmails.map((user) => [
      user.email,
      new Date(user.$createdAt).toLocaleString(),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "wolfgng-waitlist.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  if (!authorized) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0f0f0f",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "2rem",
          }}
        >
          <h1>WolfGNG Admin</h1>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "1rem",
            }}
          />

          <button
            onClick={login}
            style={{
              width: "100%",
              marginTop: "1rem",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
      }}
    >
      <h1>WolfGNG Waitlist Dashboard</h1>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <strong>Total Subscribers:</strong> {emails.length}
        </div>

        <button onClick={loadEmails}>
          Refresh
        </button>

        <button onClick={exportCSV}>
          Export CSV
        </button>
      </div>

      <input
        type="text"
        placeholder="Search email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          marginTop: "1rem",
        }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            width: "100%",
            marginTop: "2rem",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px" }}>Email</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Joined</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmails.map((user) => (
              <tr key={user.$id}>
                <td style={{ padding: "12px" }}>{user.email}</td>
                <td style={{ padding: "12px" }}>
                  {new Date(user.$createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}