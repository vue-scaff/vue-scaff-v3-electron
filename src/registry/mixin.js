// Use Map State
import { mapState } from 'vuex';

// Computed Stores
const storeMapping = mapState({
  // Global Store
  state: (state) => state,
  // Example
  start: ({ start }) => start,
});

// Export
export default {
  computed: {
    ...storeMapping,
  },
};
