import Text from "./components/text";

export default function App() {
  return (
    <>
      <Text as="h1" variant="body-md-bold">Hello World!</Text>
      <Text variant="body-sm-bold">Hello World!</Text>
      <Text as="p" className="text-pink-base">Hello World!</Text>
    </>
  )
}
