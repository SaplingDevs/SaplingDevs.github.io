import { useState, useEffect } from "react";
import DocPages from "../elements/DocPages";

export default function Docs() {
  const [docPages, setDocPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocFiles = async () => {
      const files = await getDocFiles();
      setDocPages(files);
      setLoading(false);
    };

    fetchDocFiles();
  }, []);

  return (
    <div className="animate-slide-up">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <DocPages docPages={docPages} />
        </>
      )}
    </div>
  );
}


async function getDocFiles() {
  const URL = "https://api.github.com/repos/SaplingDevs/Sapling/contents/docs/pages";
  const GitAPI = await fetch(URL);
  const data = await GitAPI.json() as { name: string, download_url: string}[];

  return await Promise.all(
    data.map(async ({ name, download_url }) => {
      const response = await fetch(download_url);
      const content = await response.text();
      return [name.replace(".md", ""), content];
    })
  );
}
