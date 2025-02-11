import { useState } from 'react';
import { Coffee, Settings, Clock, ThumbsUp, Timer, DollarSign } from 'lucide-react';

export default function CoffeeMachineQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'experience',
      text: 'מה הכי מתאר את החוויה שאת/ה מחפש/ת בהכנת הקפה?',
      options: [
        { 
          id: 'simple', 
          text: 'אני רוצה קפה פשוט בבוקר בלי הרבה הכנה והתעסקות',
          icon: Coffee
        },
        { 
          id: 'moderate', 
          text: 'אני נהנה/ת מההכנה וההתעסקות בקטנה',
          icon: Settings
        },
        { 
          id: 'involved', 
          text: 'אני נהנה/ת מלהכין את הקפה, מקדיש/ה זמן ואוהב/ת את הסיפוק מקפה מושלם',
          icon: ThumbsUp
        }
      ]
    },
    {
      id: 'time',
      text: 'כמה זמן את/ה מוכן/ה להשקיע בהכנת כוס קפה?',
      options: [
        { 
          id: 'quick', 
          text: 'פחות מדקה - רוצה שהמכונה תעשה הכל',
          icon: Timer
        },
        { 
          id: 'medium', 
          text: '2-3 דקות - מוכן/ה להשקיע קצת זמן',
          icon: Clock
        },
        { 
          id: 'long', 
          text: '5+ דקות - הזמן לא משנה, העיקר התוצאה',
          icon: Coffee
        }
      ]
    },
    {
      id: 'budget',
      text: 'מה התקציב שלך למכונת קפה (ומטחנה במידת הצורך)?',
      options: [
        { 
          id: 'low', 
          text: 'עד 2,000 ₪',
          icon: DollarSign
        },
        { 
          id: 'medium', 
          text: '2,000-4,000 ₪',
          icon: DollarSign
        },
        { 
          id: 'high', 
          text: '4,000+ ₪',
          icon: DollarSign
        }
      ]
    }
  ];

  const recommendations = {
    'simple-quick-low': {
      machines: [
        {
          name: 'Pascale Life & Fun',
          price: '1,500 ₪',
          description: 'קומפקטית לאספרסו, בלי מקציף חלב, מיכל קפה 100ג׳, 5 רמות טחינה, מיכל מים 1.1ל׳'
        },
        {
          name: 'Philips OMNIA EP2220/10',
          price: '1,500 ₪',
          description: 'מקציף קיטור בסיסי מאוד, 12 דרגות טחינה, 1.8 ל׳ 275ג׳ מיכל פולים'
        }
      ]
    },
    'simple-quick-medium': {
      machines: [
        {
          name: 'Delonghi Magnifica S ECAM',
          price: '1,900 ₪',
          description: 'עם מקציף קיטור, מיכל פולים 250ג׳, מיכל מים 1.8 ל׳, 13 מצבי טחינה'
        },
        {
          name: 'Gaggia Magenta Plus',
          price: '2,200 ₪',
          description: 'עם מקציף קיטור נירוסטה, מיכל פולים 250ג׳, מיכל מים 1.8 ל׳, 12 מצבי טחינה'
        }
      ]
    },
    'simple-quick-high': {
      machines: [
        {
          name: 'Phillips 3300 LatteGo',
          price: '2,800 ₪',
          description: 'הקצפה אוטומטית, יותר שקטה, 12 דרגות טחינה, מיכל מים 1.8ל׳'
        },
        {
          name: "De'Longhi Dinamica Plus",
          price: '4,000 ₪',
          description: 'הקצפה אוטומטית, יותר שקטה, מיכל מים 1.8ל׳, ממשק עריכה'
        }
      ]
    },
    'moderate-medium-low': {
      machines: [
        {
          name: 'Ninja Luxe Essential',
          price: '2,800 ₪',
          description: 'לאספרסו, הפוך וקפה פילטר, הקצפה אוטומטית, הכוונה מהמכונה לדיוק הקפה, מטחנה קונית עם 25 דרגות טחינה, מיכל מים 1.2 ל׳'
        }
      ]
    },
    'moderate-medium-medium': {
      machines: [
        {
          name: 'Breville Barista Express',
          price: '3,000 ₪',
          description: 'הכל באחד, עיצוב קלאסי חדשני, מיכל פולים 250ג׳, מיכל מים 2ל׳'
        },
        {
          name: 'Lelit pl042temd',
          price: '3,700 ₪',
          description: 'מטחנת סכינים קוניות 38מ"מ, כוונון ידני נגיש, בקר טמפ׳, דוד 250מ"מ, ידית 57, סטימר נירוסטה מקצועי'
        }
      ]
    },
    'involved-long-medium': {
      machines: [
        {
          name: 'Gaggia Classic Pro',
          price: '2,200 ₪',
          description: 'איטלקית איכותית, ידית הקצפה נירוסטה, פשוטה לשימוש, מיכל מים 2.1 ל׳'
        }
      ],
      grinders: [
        {
          name: 'Eureka Mignon',
          price: '1,700 ₪',
          description: 'חשמלית, סכינים שטוחות, גודל סכינים 50מ"מ'
        }
      ]
    },
    'involved-long-high': {
      machines: [
        {
          name: 'Rocket Appartamento',
          price: '7,000 ₪',
          description: 'עיצוב איטלקי איכותי עם ברזים וידית מעץ, התחממות מיטבית תוך 24 דקות, בקרת טמפרטורה מדויקת'
        },
        {
          name: 'Lelit Bianca V3',
          price: '10,000 ₪',
          description: 'בלתי מתפשרת, עיצוב יפיפה עם ידיות מעץ, ידית הקצפה מקצועית, שליטה ידנית על זרימת המים'
        }
      ],
      grinders: [
        {
          name: 'Eureka Mignon Specialita',
          price: '2,000 ₪',
          description: 'חשמלית, סכינים שטוחות בגודל 55מ"מ'
        },
        {
          name: 'Ceado E37S',
          price: '6,000 ₪',
          description: 'מטחנה חשמלית עם 83 מ"מ סכינים שטוחות, 1,700 RPM'
        }
      ]
    }
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers({...answers, [questionId]: answerId});
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendations = () => {
    const key = `${answers.experience}-${answers.time}-${answers.budget}`;
    return recommendations[key] || {
      machines: [{
        name: "לא נמצאו המלצות מדויקות",
        description: "נסה/י לשנות את הקריטריונים שלך"
      }]
    };
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const result = getRecommendations();
    
    return (
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <h2 className="text-2xl font-bold mb-6 text-center">ההמלצות שלנו עבורך</h2>
        
        <div className="space-y-6">
          {result.machines.map((machine, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{machine.name}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-2">{machine.price}</p>
              <p className="text-gray-600">{machine.description}</p>
            </div>
          ))}
          
          {result.grinders && (
            <>
              <h3 className="text-xl font-bold mt-8 mb-4">מטחנות קפה מומלצות:</h3>
              {result.grinders.map((grinder, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{grinder.name}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{grinder.price}</p>
                  <p className="text-gray-600">{grinder.description}</p>
                </div>
              ))}
            </>
          )}
        </div>
        
        <button
          onClick={resetQuiz}
          className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          התחל מחדש
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 flex-1 mx-1 rounded ${
                idx <= step ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center">{questions[step].text}</h2>
      </div>

      <div className="space-y-4">
        {questions[step].options.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => handleAnswer(questions[step].id, option.id)}
              className="w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-4 space-x-reverse"
            >
              <Icon className="w-6 h-6 text-blue-600" />
              <span className="text-lg">{option.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
