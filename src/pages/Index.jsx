import React from 'react';
import UrlSubmissionForm from '../components/UrlSubmissionForm';
import ResultDisplay from '../components/ResultDisplay';

const Index = () => {
  const [result, setResult] = React.useState(null);

  const handleSubmit = async (url) => {
    // TODO: Implement the actual API call to process the document and generate slides
    // For now, we'll just simulate a response after a short delay
    setTimeout(() => {
      setResult('https://docs.google.com/presentation/d/example-slides-id');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">FromDocToDeck</h1>
        <UrlSubmissionForm onSubmit={handleSubmit} />
        {result && <ResultDisplay result={result} />}
      </div>
    </div>
  );
};

export default Index;
