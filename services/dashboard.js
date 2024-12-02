const data = {
    "users": [
      {
        "id": 1,
        "name": "Elvin Abbasov",
        "email": "elvin.abbasov@example.com",
        "createdAt": "2024-12-01T08:00:00Z",
        "profileImage": "user.jpeg",
        "linkedinUrl": "url here",
        "experienceYear": 5,
        "bio": "Experienced Software Engineer with a passion for web technologies.",
        "skills": ["JavaScript", "React", "Node.js", "TypeScript"]
      }
    ],
    "companies": [
      {
        "id": 1,
        "name": "TechNest LLC",
        "location": "Baku, Azerbaijan",
        "industry": "IT",
        "createdAt": "2023-01-15T12:00:00Z",
        "website": "https://www.technest.az",
        "employeesIds": ["1", "2"],
        "reviews": [
          {
            "userId": 1,
            "comment": "Great company to work with!",
            "rating": 5
          },
          {
            "userId": 2,
            "comment": "Friendly environment and innovative projects.",
            "rating": 4
          }
        ]
      }
    ],
    "vacancies": [
      {
        "id": 1,
        "title": "Frontend Developer",
        "companyId": 1,
        "description": "We are looking for a skilled Frontend Developer with experience in React and TypeScript.",
        "salary": "2000-3000 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true,
        "candidates": [
          { "candidateId": "1", "status": "pending" },
          { "candidateId": "2", "status": "accepted" },
          { "candidateId": "3", "status": "rejected" }
        ]
      },
      {
        "id": 2,
        "title": "Backend Developer",
        "companyId": 1,
        "description": "We are seeking an experienced Backend Developer with a focus on Node.js.",
        "salary": "3000-4000 AZN",
        "postedAt": "2024-11-25T09:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true,
        "candidates": [
          { "candidateId": "2", "status": "pending" },
          { "candidateId": "1", "status": "accepted" }
        ]
      }
    ]
  };
  
  // Vakansiyaları göstərmək üçün funksiya
  function showVacancies() {
    const vacancyContainer = document.querySelector('.dashboard-content'); // Vakansiya kartlarını göstərmək üçün konteyneri seçirik
    data.vacancies.forEach(vacancy => {
      // Hər bir vakansiya üçün yeni div elementi yaradırıq
      const vacancyCard = document.createElement('div');
      vacancyCard.classList.add('vacancy-card');
      
      // Vakansiya kartını doldururuq
      vacancyCard.innerHTML = `
        <h3>${vacancy.title}</h3>
        <p>${vacancy.description}</p>
        <div class="salary">${vacancy.salary}</div>
        <div class="employment-type">${vacancy.employmentType}</div>
        <a href="#" class="apply-button">Apply Now</a>
      `;
      
      // Vakansiya kartını konteynerə əlavə edirik
      vacancyContainer.appendChild(vacancyCard);
    });
  }
  
  // Funksiyanı çağırırıq ki, vakansiyalar göstərilsin
  showVacancies();
  