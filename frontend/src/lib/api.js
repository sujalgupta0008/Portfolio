import emailjs from '@emailjs/browser';

export const submitContact = async (form) => {
  return emailjs.send(
    'service_qmay8y3',
    'template_u76kva4',
    {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    },
    'gCiFxB8m0RyHM-_ke'
  );
};

export const fetchGithubProfile = () =>
  fetch(`https://api.github.com/users/sujalgupta0008`).then(r => r.json());

export const resumeDownloadUrl = `https://github.com/sujalgupta0008/Portfolio/raw/main/backend/assets/Sujal_Gupta_Resume.pdf`;
