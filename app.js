// TaskFlow Simple Interactive Logic

document.addEventListener('DOMContentLoaded', () => {

  const organizeBtn = document.getElementById('organizeBtn');
  const demoResult = document.getElementById('demoResult');
  const taskStatuses = document.querySelectorAll('.task-status');

  if (organizeBtn) {
    organizeBtn.addEventListener('click', () => {
      // Update all task statuses to completed
      taskStatuses.forEach((status) => {
        status.textContent = 'Completed ✓';
        status.classList.remove('pending');
        status.classList.add('completed');
      });

      // Update feedback message
      demoResult.textContent = '✨ Done! All 3 tasks categorized and prioritized in 0.4 seconds.';
      demoResult.style.color = '#15803d';
    });
  }

  // 2. Simple Email Waitlist Form Logic
  const signupForm = document.getElementById('signupForm');
  const emailInput = document.getElementById('emailInput');
  const signupSuccess = document.getElementById('signupSuccess');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop page reload
      if (emailInput.value) {
        signupSuccess.textContent = '🎉 Thank you! You have been added to the early access list.';
        emailInput.value = ''; // Reset input
      }
    });
  }

});
