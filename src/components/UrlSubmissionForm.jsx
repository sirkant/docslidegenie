import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const UrlSubmissionForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Google Docs URL"
        required
        className="w-full"
      />
      <Button type="submit" className="w-full">
        Generate Slides
      </Button>
    </form>
  );
};

export default UrlSubmissionForm;