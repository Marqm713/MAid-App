document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const result = document.getElementById('bmi-result');
    const category = document.getElementById('bmi-category');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const feet = parseFloat(document.getElementById('feet').value);
        const inches = parseFloat(document.getElementById('inches').value);
        const pounds = parseFloat(document.getElementById('pounds').value);

        if (!feet && !inches || !pounds) {
            alert('Please enter valid values for height and weight.');
            return;
        }

        const totalInches = (feet * 12) + inches;
        const bmi = ((pounds / (totalInches ** 2)) * 703).toFixed(2);

        result.textContent = `Your BMI is: ${bmi}`;

        let classification = '';
        if (bmi < 18.5) classification = 'Underweight';
        else if (bmi < 24.9) classification = 'Normal weight';
        else if (bmi < 29.9) classification = 'Overweight';
        else classification = 'Obese';

        category.textContent = `Category: ${classification}`;
    });
});
