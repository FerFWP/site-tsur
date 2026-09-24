"use client";

import { FormEvent, InvalidEvent, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">("idle");
  const submissionStarted = useRef(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const website = event.currentTarget.elements.namedItem("url") as HTMLInputElement | null;
    if (website?.value && !/^https?:\/\//i.test(website.value)) {
      website.value = `https://${website.value}`;
    }
    submissionStarted.current = true;
    setSubmitState("submitting");
  }

  function clearValidationMessage(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity("");
  }

  function handleInvalid(event: InvalidEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const messages: Record<string, string> = {
      last_name: "Informe seu nome.",
      company: "Informe o nome da empresa.",
      email: input.validity.valueMissing ? "Informe seu e-mail." : "Informe um e-mail válido.",
      phone: input.validity.valueMissing ? "Informe seu telefone." : "Informe o telefone no formato (00)00000-0000.",
      url: "Informe um site válido, como www.empresa.com.br.",
    };
    input.setCustomValidity(messages[input.name] || "Revise este campo.");
  }

  function handlePhoneInput(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    input.setCustomValidity("");
    const digits = input.value.replace(/\D/g, "").slice(0, 11);
    if (!digits) {
      input.value = "";
      return;
    }
    if (digits.length <= 2) {
      input.value = `(${digits}`;
      return;
    }
    const areaCode = digits.slice(0, 2);
    const firstPart = digits.slice(2, 7);
    const lastPart = digits.slice(7, 11);
    input.value = `(${areaCode})${firstPart}${lastPart ? `-${lastPart}` : ""}`;
  }

  function handleSalesforceResponse() {
    if (!submissionStarted.current) return;
    submissionStarted.current = false;
    setSubmitState("success");
  }

  if (submitState === "success") {
    return (
      <section className="contact-form contact-form-success" role="status" aria-live="polite">
        <div className="success-icon"><CheckCircle2 aria-hidden="true" /></div>
        <span>CONTATO RECEBIDO</span>
        <h2>Obrigado, logo entraremos em contato.</h2>
      </section>
    );
  }

  return (
    <>
      <form
        className="contact-form"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Das00000DGDjQ"
        method="POST"
        target="salesforce-web-to-lead"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="oid" value="00Das00000DGDjQ" />
        <input type="hidden" name="retURL" value="https://tsur.io/contato" />
        <input type="hidden" id="lead_source" name="lead_source" value="Web" />

        <div className="form-heading">
          <div className="form-icon"><Mail /></div>
          <div><span>FALE COM A TSUR</span><h2>Conte um pouco sobre a sua empresa.</h2></div>
        </div>

        <div className="form-grid">
          <label><span>Nome *</span><input id="last_name" name="last_name" type="text" maxLength={80} autoComplete="name" required placeholder="Seu nome" onInput={clearValidationMessage} onInvalid={handleInvalid} /></label>
          <label><span>Empresa *</span><input id="company" name="company" type="text" maxLength={40} autoComplete="organization" required placeholder="Nome da empresa" onInput={clearValidationMessage} onInvalid={handleInvalid} /></label>
          <label><span>E-mail *</span><input id="email" name="email" type="email" maxLength={80} autoComplete="email" required placeholder="nome@empresa.com" onInput={clearValidationMessage} onInvalid={handleInvalid} /></label>
          <label><span>Telefone *</span><input id="phone" name="phone" type="tel" inputMode="numeric" maxLength={14} pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" autoComplete="tel" required placeholder="(00)00000-0000" onInput={handlePhoneInput} onInvalid={handleInvalid} /></label>
          <label className="full-field"><span>Site da empresa</span><input id="url" name="url" type="text" inputMode="url" maxLength={80} pattern="^(https?://)?(www\.)?[^\s.]+(\.[^\s.]+)+.*$" autoComplete="url" placeholder="www.empresa.com.br" onInput={clearValidationMessage} onInvalid={handleInvalid} /></label>
        </div>

        <div className="form-submit">
          <p>Ao enviar, você concorda com nossa <a href="/privacidade">Política de Privacidade</a>.</p>
          <button className="button primary" type="submit" disabled={submitState === "submitting"}>{submitState === "submitting" ? "Enviando..." : "Enviar contato"}<ArrowRight size={19} /></button>
        </div>
      </form>
      <iframe className="salesforce-web-to-lead-frame" name="salesforce-web-to-lead" title="Resposta do formulário" onLoad={handleSalesforceResponse} />
    </>
  );
}
