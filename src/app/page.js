"use client";
import React from "react";
import Script from "next/script";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Meera Kurti - Meadow",
      boutique: "Kumaon Threads",
      price: 799,
      image: "/meerakurti.jpg",
    },
    {
      id: 2,
      name: "Silken Whisper Scarf",
      boutique: "Silk & Spice",
      price: 499,
      image: "/scraff.webp",
    },
    {
      id: 3,
      name: "Noor Boutique Dress",
      boutique: "Valley Weaves",
      price: 1299,
      image: "/boutique.webp",
    },
    {
      id: 4,
      name: "Ridge Wrap - Pashmina",
      boutique: "Pahadi Looms",
      price: 999,
      image: "/pashmina.webp",
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
