import { useEffect, useMemo, useState } from "react";
import { Query } from "appwrite";
import { DATABASE_ID, databases, WAITLIST_COLLECTION_ID } from "../components/lib/appwrite";
import { toast } from "react-toastify";
import wolf from "../../public/assets/wolff.png"

import abt from "../../public/assets/wolff.png"
import danski from "../../public/assets/cart.png"

import london from "../../public/assets/trao.png";
import nairobi from "../../public/assets/sweaty.png";
import kampala from "../../public/assets/sweti.png";
import cairo from "../../public/assets/t-sho.png";
import Kinsasha from "../../public/assets/ty-ty.png"
import abudhabi from "../../public/assets/navy-t-sho.png"
import lagos from "../../public/assets/swaet.png";
import claifornia from "../../public/assets/t-sho-ty.png"
import paloalto from "../../public/assets/seat-tsho.png"
import dodoma from "../../public/assets/combat.png";
import dah from "../../public/assets/combato.png";
import { Link } from "react-router-dom";

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

  const copyEmail = async (email: string) => {
  try {
    await navigator.clipboard.writeText(email);
    toast.success("Email copied");
  } catch (error) {
    console.error(error);
    toast.error("Failed to copy");
  }
};

const merchs = [
    {
      image: london,
      text: ["WolfGNG", "Sweat Pants"],
       overlay: "WolfGNG"
    },
    {
      image: nairobi,
      text: ["WolfGNG", "Navyblue Suit"],
      overlay: "WolfGNG"
    },
    {
      image: kampala,
      text: ["WolfGNG", "white Suit"],
     
      overlay: "WolfGNG"
    },
    {
      image: cairo,
      text: ["WolfGNG", "Black T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: Kinsasha,
      text: ["WolfGNG", "White T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: abudhabi,
      text: ["WolfGNG", "Navy Blue T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dodoma,
      text: ["WolfGNG", "Combat T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dah,
      text: ["WolfGNG", "Navy T-Shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: claifornia,
      text: ["WolfGNG", "Black Tees"],
      overlay: "WolfGNG"
    },
    {
      image: lagos,
      text: ["WolfGNG", "Navy Blue Tees"],
      overlay: "WolfGNG"
    },
    {
      image: paloalto,
      text: ["WolfGNG", "White Tees"],
      overlay: "WolfGNG"
    },
  ];

  if (!authorized) {
    return (
      <div
       className="home-cony"
      >
        <div
          className="seer"
        >
          <h1>WolfGNG Admin</h1>
          <img 
            src={wolf}
            alt="wolfy"
            className="koima"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            className="seaker"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "1rem",
            }}
          />

          <button
            onClick={login}
            className="btn-gradd"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
     className="home-cony"
    >
      <h1>WolfGNG Waitlist Dashboard</h1>

      <img 
        src={wolf}
        alt="wolfy"
        className="koima"
      />

      <div
        className="mbaya"
      >
        <div>
          <strong>Total Subscribers:</strong> {emails.length}
        </div>

        <button 
        className="btn-gradd" onClick={loadEmails}>
          Refresh
        </button>

        <button
        className="btn-gradd"
         onClick={exportCSV}>
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
        className="seaker"
      />

      {loading ? (
        <p>Fteching...</p>
      ) : (
        <table
          className="timber"
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

      <h1 className="gethaa">WolfGNG Merchendise Dashboard</h1>
       <div className="missed">
          <div className= "sauti">
              
              <img 
                src={''}
                alt="WOLFGNG"
                className="kanye"
              />

              <div className="berbique">

                <button 
                  className="shugli">
                  <Link 
                    to={''}
                    className="pain">
                    Add 
                  </Link>
                  <img 
                    src={danski}
                    alt="cart"
                    height={25}
                    width={25}
                  />
                </button>
              </div>

            </div>

          {merchs.map((merch, i) => (
            <div className={`sauti item-${i}`} key={i}>
              
              <img 
                src={merch.image}
                alt="WOLFGNG"
                className="kanye"
              />

              <div className="berbique">
                <Link 
                    to={'/wolfgng'} 
                    className="pain">
                    <img 
                      src={abt}
                      alt="wolfgng"
                      height={30}
                      width={30}
                      className="waba"
                    />
                </Link>

                <button 
                  className="shugli">
                  <Link 
                    to={''}
                    className="pain">
                    Remove 
                  </Link>
                  <img 
                    src={danski}
                    alt="cart"
                    height={25}
                    width={25}
                  />
                </button>
              </div>

            </div>
            ))}
        </div>
    </div>
  );
}