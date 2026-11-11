export function Seal({ text = 'COMIDA BOA TAMBÉM É RESPEITO · ' }: { text?: string }) {
  return (
    <div className="hero__seal" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path
            id="seal-path"
            d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
          />
        </defs>
        <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(34,37,27,0.18)" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(34,37,27,0.12)" />
        <text
          fill="#4A5A36"
          fontSize="13.2"
          letterSpacing="3.1"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          <textPath href="#seal-path" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="hero__seal-core">
        15
        <br />
        receitas
      </span>
    </div>
  );
}
