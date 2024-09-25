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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Convert Your Docs to Slides</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <UrlSubmissionForm onSubmit={handleSubmit} />
        {result && <ResultDisplay result={result} />}
      </div>
    </div>
  );
};

export default Index;
