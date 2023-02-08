const teamInformation = require('./index')
//tailwind card element here:
function generateHTML(teamArray){
  const htmlCode = ''
  teamArray.forEach(employee => {
  if (employee.getRole() === "Manager") {
    const generateManagerProfile = `
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Employees only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">${employee.getRole()}</div>
          <p class="text-gray-700 text-base">${employee.name}</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://pixabay.com/get/g65817b1e62dc10b03a647a96e20f22f2340fc1625dd9b5fd4c42952fb8645a250c46cc7d3f39433a31f5063a5dd98ec7_1280.jpg" alt="random stock image">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">${employee.officeNumber}</p>
            <p class="text-gray-600">${employee.email}</p>
          </div>
        </div>
      </div>
    </div> 
    `;
    teamCard += generateManagerProfile
  } else if (employee.getRole() === "Engineer") {

    const generateEngineerProfile = `
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Employees only
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">${employee.getRole()}</div>
        <p class="text-gray-700 text-base">${employee.name}</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="https://pixabay.com/get/g65817b1e62dc10b03a647a96e20f22f2340fc1625dd9b5fd4c42952fb8645a250c46cc7d3f39433a31f5063a5dd98ec7_1280.jpg" alt="random stock image">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">${employee.gitHub}</p>
          <p class="text-gray-600">${employee.email}</p>
        </div>
      </div>
    </div>
    </div> 
    `;
    teamCard += generateEngineerProfile
  } else if(employee.getRole() === "Intern"){

    const generateInternProfile = `
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Employees only
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">${employee.getRole()}</div>
        <p class="text-gray-700 text-base">${employee.name}</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="https://pixabay.com/get/g65817b1e62dc10b03a647a96e20f22f2340fc1625dd9b5fd4c42952fb8645a250c46cc7d3f39433a31f5063a5dd98ec7_1280.jpg" alt="random stock image">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">${employee.School}</p>
          <p class="text-gray-600">${employee.email}</p>
        </div>
      </div>
    </div>
    </div> 
    `;
    teamCard += generateInternProfile
  }
  });

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>Team Information- ${teamName}</title>
</head>
<body>
${teamCard}
</body>
</html>`
}

module.exports= generateHTML