# Mini Design System 🧩

A small reusable React component library written in **JavaScript (JSX)** — perfect to show your understanding of:
- 🔁 Reusable props and consistent UI
- ♿ Accessibility best practices (ARIA labels, focus)
- ⚡️ Component-driven design for developer experience

## Components

- **Button** — Primary & Secondary variants, disabled state.
- **Input** — Label, placeholder, validation message, accessible.
- **Card** — Flexible layout for text and images.

## Usage Example

```jsx
import { Button, Input, Card } from "mini-design-system";

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Input
        id="email"
        label="Email"
        placeholder="you@example.com"
        value=""
        onChange={() => {}}
      />
      <Card
        title="My Card"
        content="Reusable content goes here."
        imageSrc="https://via.placeholder.com/150"
      />
    </div>
  );
}
