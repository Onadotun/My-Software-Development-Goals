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
    now.setHours(now.getHours());
    const gmtTime = now.toTimeString().split(" ")[0];
    gmtTimeElement.textContent = gmtTime;
  };

  const updateDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    currentDayElement.textContent = days[now.getUTCDay()];
  };

  showGoals(year1Goals, 500);
  showGoals(year2Goals, 500);
  updateTime();
  updateDay();
});
