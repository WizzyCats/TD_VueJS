import { ref } from 'vue'

// Récupération du retour de l'API
export function useFetch(url) {

  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  fetch(url)
    .then((r) => {
      if(!r.ok) throw new Error(r.status)
      return r.json();
      })
    .then ((json) => (data.value=json))
    .catch ((e) => (error.value=e))
    .finally (() => (loading.value=false))

  return {data, error, loading}
}

