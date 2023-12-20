let main = () => {
  let emojis = [
    "🐱",
    "🐈",
    "🐈‍⬛",
    "🦁",
    "🐯",
    "🐅",
    "🐆",
    "🐴",
    "🫎",
    "🫏",
    "🐎",
    "🦄",
    "🦓",
    "🦌",
    "🦬",
    "🐮",
    "🐂",
    "🐃",
    "🐄",
    "🐷",
    "🐖",
    "🐗",
    "🐽",
    "🐏",
    "🐑",
    "🐐",
    "🐪",
    "🐫",
    "🦙",
    "🦒",
    "🐘",
    "🦣",
    "🦏",
    "🦛",
    "🐭",
    "🐁",
    "🐀",
    "🐹",
    "🐰",
    "🐇",
    "🐿️",
    "🐿",
    "🦫",
    "🦔",
    "🦇",
    "🐻",
    "🐻‍❄️",
    "🐻‍❄",
    "🐨",
    "🐼",
    "🦥",
    "🦦",
    "🦨",
    "🐙",
    "🐚",
    "🪸",
    "🪼",
    "🐌",
    "🦋",
    "🐛",
    "🐜",
    "🐝",
    "🪲",
    "🐞",
    "🦗",
    "🪳",
    "🕷️",
    "🕸️",
    "🦂",
    "🦟",
    "🪰",
    "🪱",
    "🦠",
    "💐",
    "🌸",
    "💮",
    "🪷",
    "🏵️",
    "🏵",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
    "🪻",
    "🌱",
    "🪴",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌾",
    "🌿",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🪹",
    "🪺",
    "🍄",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🫐",
    "🥝",
    "🍅",
    "🫒",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶️",
    "🌶",
    "🫑",
    "🥒",
    "🥬",
    "🥦",
    "🧄",
    "🧅",
    "🥜",
    "🫘",
    "🌰",
    "🫚",
    "🫛",
    "🍞",
    "🥐",
    "🥖",
    "🫓",
    "🥨",
    "🥯",
    "🥞",
    "🧇",
    "🧀",
    "🍖",
    "🍗",
    "🥩",
    "🥓",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🥪",
    "🌮",
    "🌯",
    "🫔",
    "🥙",
    "🧆",
    "🥚",
    "🍳",
    "🥘",
    "🍲",
    "🫕",
    "🥣",
    "🥗",
    "🍿",
    "🧈",
    "🧂",
    "🥫",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍠",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🥮",
    "🍡",
    "🥟",
    "🥠",
    "🥡",
    "🦀",
    "🦞",
    "🦐",
    "🦑",
    "🦪",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🧁",
    "🥧",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "🫖",
    "🍵",
    "🍶",
    "🍾",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🥂",
    "🥃",
    "🫗",
    "🥤",
    "🧋",
    "🧃",
    "🧉",
    "🧊",
    "🥢",
    "🍽️",
  ];

  const size = 75;
  const rows = 10;
  const cols = 15;

  const width = cols * size + size * 0.03;
  const height = rows * size + size * 0.03;

  const canvas = document.querySelector("#game");
  const ctx = canvas.getContext("2d");

  setCanvas();

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, width, height);

  //canvas.draw;

  const map = [];
  let c = 0;
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(emojis[c++]);
    }
    map.push(row);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ctx.fillStyle = "#eeffcc";
      ctx.fillRect(
        0 + size * 0.02,
        0 + size * 0.02,
        size - size * 0.02,
        size - size * 0.02
      );

      ctx.translate(size / 2, size / 2);

      ctx.rotate((Math.PI * 2) / (1 + (j % 9)));

      ctx.font = `${size * 0.75}px Arial`;
      ctx.textAlign = "center";
      ctx.fillText(map[i][j], 0, size / 4);

      ctx.rotate(-(Math.PI * 2) / (1 + (j % 9)));

      ctx.translate(-size / 2, -size / 2);

      ctx.translate(size, 0);
    }
    ctx.translate(-cols * size, 0);
    ctx.translate(0, size);
  }

  //canvas.draw;

  function setCanvas() {
    canvas.width = width;
    canvas.height = height;

    // Get the DPR and size of the canvas
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    ctx.scale(dpr, dpr);

    // Set the "drawn" size of the canvas
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  main();
});
