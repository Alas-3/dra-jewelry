import HomePage from "./homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <title>DRA Jewelry</title>
        <meta
          name="description"
          content="Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create."
        />
    <meta name="google-site-verification" content="OBwTnzCJhtTRTGjraMYwzcyuh6-Q9XyE-bb0rxaAzOw" />
    </Head>
    <div>
      <HomePage />
    </div>
    </>
  );
}
