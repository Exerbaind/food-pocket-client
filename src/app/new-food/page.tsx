import Form from "@/components/Form";

export default async function Home() {
  return (
    <div>
      <h1>Форма для блюда</h1>
      <Form type="newFood" />
    </div>
  );
}
