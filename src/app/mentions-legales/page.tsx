import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <main className="text-foreground mx-auto min-h-screen w-full max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-2xl font-semibold">Mentions légales</h1>
      <p className="text-foreground/60 mb-8 text-sm">
        Dernière mise à jour : {new Date().getFullYear()}
      </p>

      <div className="text-foreground/80 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-foreground mb-2 font-semibold">Éditeur du site</h2>
          <p>
            Ce site est édité à titre personnel et non professionnel par Adrien Delagneau. En tant
            qu&apos;éditeur non professionnel, conformément à l&apos;article 6-III-1 de la loi n°
            2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique,
            l&apos;adresse postale n&apos;est pas rendue publique.
          </p>
          <p className="mt-2">Contact : devwork5600@gmail.com</p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 font-semibold">Directeur de la publication</h2>
          <p>Adrien Delagneau.</p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            (
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="underline">
              vercel.com
            </a>
            ).
          </p>
        </section>
      </div>
    </main>
  );
}
