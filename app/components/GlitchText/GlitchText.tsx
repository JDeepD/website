interface Props {
  original: string;
  text: string;
  setText: any;
}

const generateRandomLetters = (
  original: string,
  text: string,
  setText: any
) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iterations = 0;
  let interval = setInterval(() => {
    setText((text: string) => {
      return text
        .split("")
        .map((letter, index) => {
          if (index < iterations) return original[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    });
    if (iterations >= original.length) {
      clearInterval(interval);
    }
    iterations += 1 / (80 / original.length);
  }, 8);
};

export default function GlitchText<FC>({ original, text, setText }: Props) {
  return (
    <span
      onMouseOver={() => generateRandomLetters(original, text, setText)}
      className="cursor-pointer font-space"
      id="glitchtext"
    >
      {text}
    </span>
  );
}
