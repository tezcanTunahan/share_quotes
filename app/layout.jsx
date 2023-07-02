import Nav from "@/components/nav/Nav";
import Provider from "@/components/Provider";
import "./global.scss";

export const metadata = {
  title: "shareQuotes",
  description: "Read & Write & Share Quotes",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
