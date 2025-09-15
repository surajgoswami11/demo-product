"use client";
import React from "react";
import Script from "next/script";

export default function Home() {
const products = [
  {
    id: 1,
    name: "Meera Kurti - Meadow",
    boutique: "Kumaon Threads",
    price: 1200,
    image: "/meerakurti.jpg",
  },
  {
    id: 2,
    name: "Silken Whisper Scarf",
    boutique: "Silk & Spice",
    price: 1500,
    image: "/scraff.webp",
  },
  {
    id: 3,
    name: "Noor Boutique Dress",
    boutique: "Valley Weaves",
    price: 1800,
    image: "/boutique.webp",
  },
  {
    id: 4,
    name: "Ridge Wrap - Pashmina",
    boutique: "Pahadi Looms",
    price: 2200,
    image: "/pashmina.webp",
  },
  {
    id: 5,
    name: "Amber Glow Saree",
    boutique: "Royal Looms",
    price: 2500,
    image: "/ab.webp",
  },
  {
    id: 6,
    name: "Celestial Chikankari Kurta",
    boutique: "Awadh Threads",
    price: 1350,
    image: "/banarasi.jpg",
  },
  {
    id: 7,
    name: "Mystic Valley Shawl",
    boutique: "Himalayan Heritage",
    price: 2000,
    image: "/dupatta.webp",
  },
  {
    id: 8,
    name: "Velour Anarkali Gown",
    boutique: "Silhouette Studio",
    price: 3200,
    image: "/bc.webp",
  },
  {
    id: 9,
    name: "Royal Banarasi Saree",
    boutique: "Banaras Elegance",
    price: 5000,
    image: "/boutique.jpg",
  },
  {
    id: 10,
    name: "Ethereal Lehenga",
    boutique: "Dream Weaves",
    price: 4200,
    image: "/ef.webp",
  },
  {
    id: 11,
    name: "Golden Hour Dupatta",
    boutique: "Zari & Zardosi",
    price: 1400,
    image: "/etehnic.webp",
  },
  {
    id: 12,
    name: "Sapphire Silk Saree",
    boutique: "Silken Touch",
    price: 2700,
    image: "/gh.webp",
  },
  {
    id: 13,
    name: "Ivory Pearl Kurta Set",
    boutique: "Regal Stitches",
    price: 3100,
    image: "/kurti.jpg",
  },
  {
    id: 14,
    name: "Crimson Bridal Lehenga",
    boutique: "Heritage Couture",
    price: 6800,
    image: "/lehnga.webp",
  },
  {
    id: 15,
    name: "Emerald Velvet Gown",
    boutique: "Velour Royale",
    price: 3600,
    image: "/gown.webp",
  },
  {
    id: 16,
    name: "Sunset Kanjivaram Saree",
    boutique: "South Looms",
    price: 5400,
    image: "/sadi.webp",
  },
  {
    id: 17,
    name: "Midnight Indigo Sherwani",
    boutique: "Nawab’s Choice",
    price: 4200,
    image: "/sherwani.webp",
  },
  {
    id: 18,
    name: "Lotus Blossom Dress",
    boutique: "Bloom Weaves",
    price: 1900,
    image: "/silk.jpg",
  },
  {
    id: 19,
    name: "Heritage Brocade Jacket",
    boutique: "Majestic Threads",
    price: 2500,
    image: "/whitesadi.webp",
  },
  {
    id: 20,
    name: "Regal Peacock Saree",
    boutique: "Eternal Drapes",
    price: 6000,
    image: "/peacock.webp",
  },
];



  function handlePay(product) {
    const options = {
      key: "rzp_test_vA9jNLuQNivTVS",
      amount: product.price * 100,
      currency: "USD",
      name: product.boutique,
      description: product.name,
      handler: function (response) {
        alert(
          `✅ Payment successful for ${product.name}\n💳 Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Suraj Goswami",
        email: "suraj@example.com",
        contact: "1212121212",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <main className="page">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <header className="header">
        <h1>✨ Boutique Collection ✨</h1>
        <p className="sub">Handpicked boutique outfits just for you</p>
      </header>

      <section className="grid">
        {products.map((p) => (
          <article className="card" key={p.id}>
            <div className="imgWrap">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="body">
              <h3 className="title">{p.name}</h3>
              <span className="boutique">by {p.boutique}</span>

              <div className="footer">
                <div className="price">${p.price}</div>
                <button
                  className="payBtn"
                  onClick={() => handlePay(p)}
                  aria-label={`Pay for ${p.name}`}
                >
                  Pay now
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        .page {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: "Inter", system-ui, sans-serif;
          color: #222;
        }

        .header {
          text-align: center;
          margin-bottom: 32px;
        }
        .header h1 {
          font-size: 32px;
          font-weight: 700;
          margin: 0;
        }
        .sub {
          margin-top: 6px;
          color: #666;
          font-size: 15px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }

        .imgWrap {
          width: 100%;
          height: 220px;
          background: #f4f4f4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imgWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }
        .boutique {
          font-size: 13px;
          color: #777;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .price {
          font-weight: 700;
          font-size: 18px;
          color: #222;
        }
        .payBtn {
          background: linear-gradient(90deg, #0070f3, #3399ff);
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        .payBtn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .imgWrap {
            height: 160px;
          }
          .header h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
}
