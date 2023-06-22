import "@/styles/global.css";

export const metadata = {
  title: "shareQuotes",
  description: "Read & Write & Share Quotes",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
