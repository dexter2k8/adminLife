import { useRouter } from "next/navigation";
import { memo } from "react";

function Overview() {
  const router = useRouter();
  return (
    <div style={{ background: "yellow", height: "100%" }}>
      <h2>Overview</h2>
      <button onClick={() => router.replace("/analytics")}>Rota</button>
    </div>
  );
}

export default memo(Overview);
