// Custom Hook: useAvailable
function useAvailabe(resource) {
  const [isAvailable, setIsAvailable] = useState(null);

  // ...

  return isAvailable;
}

// Usage:
  const isAvailable = useAvailable(cpu);
