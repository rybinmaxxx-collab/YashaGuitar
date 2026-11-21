import { FormWizard } from "@/components/blocks/form-wizard";
export default function Configurator() {
  return (
    <main className="wrap inner-page">
      <p className="eyebrow">JM Guitars / Индивидуальный проект</p>
      <h1>Соберите свою гитару</h1>
      <p className="page-lead">
        От идеи — к спецификации для мастера. Все параметры предварительные и
        требуют согласования.
      </p>
      <FormWizard />
    </main>
  );
}
