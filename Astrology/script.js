// Zodiac sign data
const zodiacData = [
    {
        sign: "Aries",
        complements: [
            "You are courageous.", "You inspire others.", "Your energy is contagious.", "You are a natural leader.", "You are adventurous.", "You are passionate.", "You are optimistic.", "You are confident.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic.", "You are quick-witted.", "You are independent.", "You are dynamic.", "You are generous.", "You are spontaneous.", "You are ambitious.", "You are loyal.", "You are fun-loving."
        ],
        victimCards: [
            "Avoid impulsiveness.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Taurus",
        complements: [
            "You are grounded.", "You are reliable.", "You are patient.", "You are strong.", "You are loyal.", "You are generous.", "You are kind.", "You are consistent.", "You are practical.", "You are stable.", "You are calm.", "You are focused.", "You are methodical.", "You are hardworking.", "You are responsible.", "You are supportive.", "You are fun-loving.", "You are adventurous.", "You are passionate.", "You are optimistic."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Gemini",
        complements: [
            "You are curious.", "You are intelligent.", "You are quick-witted.", "You are adaptable.", "You are fun-loving.", "You are energetic.", "You are creative.", "You are witty.", "You are playful.", "You are social.", "You are enthusiastic.", "You are optimistic.", "You are passionate.", "You are dynamic.", "You are adventurous.", "You are kind.", "You are supportive.", "You are fun-loving.", "You are optimistic.", "You are confident."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Cancer",
        complements: [
            "You are emotional.", "You are sensitive.", "You are kind.", "You are nurturing.", "You are loyal.", "You are supportive.", "You are fun-loving.", "You are passionate.", "You are creative.", "You are methodical.", "You are hardworking.", "You are responsible.", "You are calm.", "You are focused.", "You are patient.", "You are consistent.", "You are practical.", "You are supportive.", "You are fun-loving.", "You are optimistic."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Leo",
        complements: [
            "You are courageous.", "You are passionate.", "You are optimistic.", "You are confident.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic.", "You are quick-witted.", "You are independent.", "You are dynamic.", "You are generous.", "You are spontaneous.", "You are ambitious.", "You are loyal.", "You are fun-loving.", "You are adventurous.", "You are passionate.", "You are optimistic.", "You are confident."
        ],
        victimCards: [
            "Avoid impulsiveness.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Virgo",
        complements: [
            "You are practical.", "You are methodical.", "You are hardworking.", "You are responsible.", "You are calm.", "You are focused.", "You are patient.", "You are consistent.", "You are practical.", "You are stable.", "You are kind.", "You are supportive.", "You are fun-loving.", "You are optimistic.", "You are passionate.", "You are dynamic.", "You are adventurous.", "You are kind.", "You are supportive.", "You are fun-loving."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Libra",
        complements: [
            "You are social.", "You are fun-loving.", "You are energetic.", "You are creative.", "You are witty.", "You are playful.", "You are enthusiastic.", "You are optimistic.", "You are passionate.", "You are dynamic.", "You are adventurous.", "You are kind.", "You are supportive.", "You are fun-loving.", "You are optimistic.", "You are confident.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Scorpio",
        complements: [
            "You are intense.", "You are passionate.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic.", "You are quick-witted.", "You are independent.", "You are dynamic.", "You are generous.", "You are spontaneous.", "You are ambitious.", "You are loyal.", "You are fun-loving.", "You are optimistic.", "You are confident.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic."
        ],
        victimCards: [
            "Avoid impulsiveness.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Sagittarius",
        complements: [
            "You are adventurous.", "You are optimistic.", "You are dynamic.", "You are creative.", "You are kind.", "You are supportive.", "You are fun-loving.", "You are passionate.", "You are determined.", "You are creative.", "You are honest.", "You are enthusiastic.", "You are quick-witted.", "You are independent.", "You are dynamic.", "You are generous.", "You are spontaneous.", "You are ambitious.", "You are loyal.", "You are fun-loving."
        ],
        victimCards: [
            "Avoid impulsiveness.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Capricorn",
        complements: [
            "You are grounded.", "You are reliable.", "You are patient.", "You are strong.", "You are loyal.", "You are generous.", "You are kind.", "You are consistent.", "You are practical.", "You are stable.", "You are calm.", "You are focused.", "You are methodical.", "You are hardworking.", "You are responsible.", "You are supportive.", "You are fun-loving.", "You are adventurous.", "You are passionate.", "You are optimistic."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Aquarius",
        complements: [
            "You are curious.", "You are intelligent.", "You are quick-witted.", "You are adaptable.", "You are fun-loving.", "You are energetic.", "You are creative.", "You are witty.", "You are playful.", "You are social.", "You are enthusiastic.", "You are optimistic.", "You are passionate.", "You are dynamic.", "You are adventurous.", "You are kind.", "You are supportive.", "You are fun-loving.", "You are optimistic.", "You are confident."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    },
    {
        sign: "Pisces",
        complements: [
            "You are emotional.", "You are sensitive.", "You are kind.", "You are nurturing.", "You are loyal.", "You are supportive.", "You are fun-loving.", "You are passionate.", "You are creative.", "You are methodical.", "You are hardworking.", "You are responsible.", "You are calm.", "You are focused.", "You are patient.", "You are consistent.", "You are practical.", "You are supportive.", "You are fun-loving.", "You are optimistic."
        ],
        victimCards: [
            "Avoid being too passive.", "Watch your temper.", "Don’t rush decisions.", "Be patient.", "Listen to others.", "Don’t be stubborn.", "Avoid selfishness.", "Don’t be reckless.", "Control your emotions.", "Don’t be too competitive.", "Avoid arrogance.", "Don’t ignore details.", "Be mindful of others.", "Don’t be impatient.", "Avoid confrontation.", "Don’t be careless.", "Be considerate.", "Don’t be bossy.", "Avoid drama.", "Don’t overcommit."
        ],
        recommendations: [
            "Take time to relax.", "Practice mindfulness.", "Listen more.", "Be open to feedback.", "Work on patience.", "Try new hobbies.", "Connect with friends.", "Focus on goals.", "Stay organized.", "Embrace change.", "Be kind to yourself.", "Celebrate small wins.", "Keep learning.", "Help others.", "Stay positive.", "Balance work and play.", "Eat healthy.", "Exercise regularly.", "Get enough sleep.", "Express gratitude."
        ]
    }
];

// Helper to get zodiac sign from month and date
function getZodiacSign(month, date) {
    const zodiacRanges = [
        { sign: "Capricorn", start: { month: "December", day: 22 }, end: { month: "January", day: 19 } },
        { sign: "Aquarius", start: { month: "January", day: 20 }, end: { month: "February", day: 18 } },
        { sign: "Pisces", start: { month: "February", day: 19 }, end: { month: "March", day: 20 } },
        { sign: "Aries", start: { month: "March", day: 21 }, end: { month: "April", day: 19 } },
        { sign: "Taurus", start: { month: "April", day: 20 }, end: { month: "May", day: 20 } },
        { sign: "Gemini", start: { month: "May", day: 21 }, end: { month: "June", day: 20 } },
        { sign: "Cancer", start: { month: "June", day: 21 }, end: { month: "July", day: 22 } },
        { sign: "Leo", start: { month: "July", day: 23 }, end: { month: "August", day: 22 } },
        { sign: "Virgo", start: { month: "August", day: 23 }, end: { month: "September", day: 22 } },
        { sign: "Libra", start: { month: "September", day: 23 }, end: { month: "October", day: 22 } },
        { sign: "Scorpio", start: { month: "October", day: 23 }, end: { month: "November", day: 21 } },
        { sign: "Sagittarius", start: { month: "November", day: 22 }, end: { month: "December", day: 21 } }
    ];
    for (let z of zodiacRanges) {
        if (
            (month === z.start.month && date >= z.start.day) ||
            (month === z.end.month && date <= z.end.day)
        ) {
            return z.sign;
        }
    }
    return "Unknown";
}

// Handle form submission
const form = document.getElementById('astrologyForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('inputName').value;
    const surname = document.getElementById('inputSurname').value;
    const birthDate = parseInt(document.getElementById('inputBirthDate').value);
    const birthMonth = document.getElementById('inputBirthMonth').value;
    const birthYear = document.getElementById('inputBirthYear').value;

    const zodiacSign = getZodiacSign(birthMonth, birthDate);
    const zodiac = zodiacData.find(z => z.sign === zodiacSign);

    let prediction = "";
    if (zodiac) {
        const comp = zodiac.complements[Math.floor(Math.random() * zodiac.complements.length)];
        const victim = zodiac.victimCards[Math.floor(Math.random() * zodiac.victimCards.length)];
        const rec = zodiac.recommendations[Math.floor(Math.random() * zodiac.recommendations.length)];
        prediction = `<strong>${zodiacSign}</strong><br>
            Compliment: ${comp}<br>
            Victim Card: ${victim}<br>
            Recommendation: ${rec}`;
    } else {
        prediction = "Could not determine zodiac sign.";
    }

    // Show prediction
    let resultDiv = document.getElementById('predictionResult');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'predictionResult';
        resultDiv.style.marginTop = '24px';
        resultDiv.style.background = '#f7f7fa';
        resultDiv.style.borderRadius = '8px';
        resultDiv.style.padding = '16px';
        resultDiv.style.boxShadow = '0 2px 8px rgba(106,76,175,0.08)';
        form.parentNode.appendChild(resultDiv);
    }
    resultDiv.innerHTML = `<h3>Astrology Prediction for ${name} ${surname}</h3>${prediction}`;
});