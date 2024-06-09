import { useEffect } from "react";
import { useRouter } from "next/router";

const DiscordPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://discord.gg/879Ze4sFsP");
  }, [router]);

  return (
    <div className="bg-color">
      <h1>Redirecting...</h1>
    </div>
  );
};

export default DiscordPage;
