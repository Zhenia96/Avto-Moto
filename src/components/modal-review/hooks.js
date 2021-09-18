import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

function useRating(defaultRating) {
  const [rating, setRating] = useState(localStorage.getItem('rating') ?? defaultRating);

  useEffect(() => {
    localStorage.setItem('rating', rating)
  }, [rating]);

  return [Number(rating), setRating];
}

function useName(defaultName) {
  const [name, setName] = useState(localStorage.getItem('name') ?? defaultName);

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name]);

  return [name, setName];
}

function useDignity(defaultDignity) {
  const [dignity, setDignity] = useState(localStorage.getItem('dignity') ?? defaultDignity);

  useEffect(() => {
    localStorage.setItem('dignity', dignity)
  }, [dignity]);

  return [dignity, setDignity];
}

function useLimitation(defaultLimitation) {
  const [limitation, setLimitation] = useState(localStorage.getItem('limitation') ?? defaultLimitation);

  useEffect(() => {
    localStorage.setItem('limitation', limitation)
  }, [limitation]);

  return [limitation, setLimitation];
}

function useComment(defaultComment) {
  const [comment, setComment] = useState(localStorage.getItem('comment') ?? defaultComment);

  useEffect(() => {
    localStorage.setItem('comment', comment)
  }, [comment]);

  return [comment, setComment];
}

export {
  useRating,
  useDignity,
  useLimitation,
  useName,
  useComment,
}