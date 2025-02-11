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
        { id: 'simple', text: 'אני רוצה קפה פשוט בבוקר בלי הרבה הכנה והתעסקות', icon: Coffee },
        { id: 'moderate', text: 'אני נהנה/ת מההכנה וההתעסקות בקטנה', icon: Settings },
        { id: 'involved', text: 'אני נהנה/ת מלהכין את הקפה, מקדיש/ה זמן ואוהב/ת את הסיפוק מקפה מושלם', icon: ThumbsUp }
      ]
    },
    {
      id: 'time',
      text: 'כמה זמן את/ה מוכן/ה להשקיע בהכנת כוס קפה?',
      options: [
        { id: 'quick', text: 'פחות מדקה - רוצה שהמכונה תעשה הכל', icon: Timer },
        { id: 'medium', text: '2-3 דקות - מוכן/ה להשקיע קצת זמן', icon: Clock },
        { id: 'long', text: '5+ דקות - הזמן לא משנה, העיקר התוצאה', icon: Coffee }
      ]
    },
    {
      id: 'budget',
      text: 'מה התקציב שלך למכונת קפה (ומטחנה במידת הצורך)?',
      options: [
        { id: 'low', text: 'עד 2,000 ₪', icon: DollarSign },
        { id: 'medium', text: '2,000-4,000 ₪', icon: DollarSign },
        { id: 'high', text: '4,000+ ₪', icon: DollarSign }
      ]
    }
  ];

  const recommendations = {
    'simple-quick-low': {
      machines: [
        { name: 'Pascale Life & Fun', price: '1,500 ₪', description: 'קומפקטית לאספרסו...' },
        { name: 'Philips OMNIA EP2220/10', price: '1,500 ₪', description: 'מקציף קיטור בסיסי מאוד...' }
      ]
    }
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendations = () => {
    const key = `${answers.experience}-${answers.time}-${answers.budget}`;
    return recommendations[key] || { machines: [{ name: 'לא נמצאו המלצות', description: 'נסה/י לשנות את הקריטריונים שלך' }] };
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
        {result.machines.map((machine, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{machine.name}</h3>
            <p className="text-lg font-semibold text-blue-600 mb-2">{machine.price}</p>
            <p className="text-gray-600">{machine.description}</p>
          </div>
        ))}
        <button onClick={resetQuiz} className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          התחל מחדש
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center">{questions[step].text}</h2>
      </div>
      {questions[step].options.map((option) => {
        const Icon = option.icon;
        return (
          <button key={option.id} onClick={() => handleAnswer(questions[step].id, option.id)}
            className="w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl flex items-center space-x-4 space-x-reverse">
            <Icon className="w-6 h-6 text-blue-600" />
            <span className="text-lg">{option.text}</span>
          </button>
        );
      })}
    </div>
  );
}
