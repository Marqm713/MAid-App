document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('drug-list');
  
    fetch('http://localhost:3000/api/drugs')
      .then((res) => res.json())
      .then((data) => {
        list.innerHTML = '';
  
        const grouped = {};
  
        data.forEach((drug) => {
          const firstLetter = drug.name[0].toUpperCase();
          if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
          }
          grouped[firstLetter].push(drug);
        });
  
        const sortedLetters = Object.keys(grouped).sort();
  
        sortedLetters.forEach((letter) => {
          const section = document.createElement('section');
  
          const header = document.createElement('h5');
          header.classList.add('mt-4');
          header.textContent = letter;
  
          const ul = document.createElement('ul');
          grouped[letter].forEach((drug) => {
            const li = document.createElement('li');
            li.textContent = `${drug.name} - ${drug.description}`;
            ul.appendChild(li);
          });
  
          section.appendChild(header);
          section.appendChild(ul);
          list.appendChild(section);
        });
      })
      .catch((err) => {
        list.innerHTML = '<li>Error loading illicit drugs</li>';
        console.error(err);
      });
  });

document.getElementById('export-pdf').addEventListener('click', () => {
    const element = document.getElementById('export-content');
    const opt = {
      margin:       0.5,
      filename:     'maid_directory.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  });

  
  