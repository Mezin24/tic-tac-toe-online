import { Header } from "components/header";
import { Game } from "@/components/game-new";
import { UITextField } from "@/components/uikit/ui-text-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      {/* <Game /> */}
      <UITextField
        required
        label="Label"
        placeholder="Placeholder"
        helperText="Helper Text"
        errorText="Error message"
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
