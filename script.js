const storageKey = "profile-theme";
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = themeToggle?.querySelector(".theme-toggle__icon");
const themeText = themeToggle?.querySelector(".theme-toggle__text");
const themeColorMeta = document.querySelector("#theme-color-meta");
const copyButton = document.querySelector("[data-copy-phone]");
const toast = document.querySelector("#copy-toast");
const avatar = document.querySelector("[data-avatar]");
const profileImage = document.querySelector("[data-profile-image]");
const initialsNode = document.querySelector("[data-avatar-initials]");
const profileName = document.querySelector("[data-profile-name]");
const yearNode = document.querySelector("#current-year");

const themeColors = {
  dark: "#07111f",
  light: "#eef3f8",
};

const themeLabels = {
  dark: {
    icon: "☀",
    text: "ڕووناکی",
    aria: "گۆڕینی ڕووکار بۆ وەشانی ڕوون",
  },
  light: {
    icon: "☾",
    text: "تاریکی",
    aria: "گۆڕینی ڕووکار بۆ وەشانی تاریک",
  },
};

const getInitials = (name) => {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (!words.length) {
    return "P";
  }

  return words.map((word) => word[0]).join("").toUpperCase();
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  themeColorMeta?.setAttribute("content", themeColors[theme]);

  if (!themeToggle || !themeIcon || !themeText) {
    return;
  }

  const nextState = theme === "dark" ? themeLabels.dark : themeLabels.light;

  themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  themeToggle.setAttribute("aria-label", nextState.aria);
  themeIcon.textContent = nextState.icon;
  themeText.textContent = nextState.text;
};

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "dark";
};

const showToast = (message) => {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2000);
};

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

const activateAvatarFallback = () => {
  avatar?.classList.add("is-fallback");
};

if (profileName && initialsNode) {
  initialsNode.textContent = getInitials(profileName.textContent);
}

if (profileImage) {
  profileImage.addEventListener("error", activateAvatarFallback);

  if (!profileImage.getAttribute("src")) {
    activateAvatarFallback();
  }
}

if (themeToggle) {
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const phoneNumber = copyButton.dataset.copyValue?.trim();

    if (!phoneNumber) {
      return;
    }

    try {
      await copyText(phoneNumber);
      showToast("ژمارەکە کۆپی کرا");
    } catch (error) {
      showToast("دووبارە هەوڵ بدە");
    }
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
