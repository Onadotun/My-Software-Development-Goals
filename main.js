document.addEventListener("DOMContentLoaded", () => {
  const year1Goals = document.querySelectorAll(
    '[data-test-id^="year-1-goal-"]'
  );
  const year2Goals = document.querySelectorAll(
    '[data-test-id^="year-2-goal-"]'
  );
  const gmtTimeElement = document.getElementById("gmt-time");
  const currentDayElement = document.getElementById("current-day");

  const showGoals = (goals, delay) => {
    goals.forEach((goal, index) => {
      setTimeout(() => {
        goal.style.opacity = 1;
      }, delay * index);
    });
  };

  const updateTime = () => {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, "0");
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, "0");
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, "0");
    const gmtTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
    gmtTimeElement.textContent = gmtTime;
  };

  const updateDay = () => {
    const now = new Date();
    const day = String(now.getUTCDate()).padStart(2, "0");
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const year = now.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    currentDayElement.textContent = formattedDate;
  };

  showGoals(year1Goals, 500);
  showGoals(year2Goals, 500);
  updateTime();
  updateDay();
});
