import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFeedback() {
  const [feedback, setFeedback] = useLocalStorage('shared_feedback', []);
  const [counters, setCounters] = useLocalStorage('shared_counters', {
    visitors: 0,
    analyses: 0
  });

  const saveFeedback = useCallback((type, rating, comment) => {
    try {
      const newFeedback = {
        type,
        rating,
        comment,
        date: new Date().toISOString(),
        id: Date.now() + Math.random()
      };

      const allFeedback = [...feedback, newFeedback];
      if (allFeedback.length > 50) {
        allFeedback.splice(0, allFeedback.length - 50);
      }

      setFeedback(allFeedback);
      return true;
    } catch (error) {
      console.error('Error saving feedback:', error);
      return false;
    }
  }, [feedback, setFeedback]);

  const getFeedback = useCallback((type = null) => {
    try {
      const sortedFeedback = [...feedback].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
      );

      return type 
        ? sortedFeedback.filter(item => item.type === type)
        : sortedFeedback;
    } catch (error) {
      console.error('Error getting feedback:', error);
      return [];
    }
  }, [feedback]);

  const getAverageRating = useCallback((type) => {
    try {
      const typeFeedback = getFeedback(type);
      if (typeFeedback.length === 0) return 0;

      const sum = typeFeedback.reduce((total, item) => total + item.rating, 0);
      return (sum / typeFeedback.length).toFixed(1);
    } catch (error) {
      console.error('Error calculating average rating:', error);
      return 0;
    }
  }, [getFeedback]);

  const updateCounters = useCallback((type) => {
    try {
      if (type === 'visitor' && !sessionStorage.getItem('visitorCounted')) {
        setCounters(prev => ({ ...prev, visitors: prev.visitors + 1 }));
        sessionStorage.setItem('visitorCounted', 'true');
      } else if (type === 'analysis') {
        setCounters(prev => ({ ...prev, analyses: prev.analyses + 1 }));
      }
    } catch (error) {
      console.error('Error updating counters:', error);
    }
  }, [setCounters]);

  return {
    feedback,
    counters,
    saveFeedback,
    getFeedback,
    getAverageRating,
    updateCounters
  };
}
