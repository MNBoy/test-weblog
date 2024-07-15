export interface QueryObject {
  [key: string]: string | number | boolean;
}

export const Tools = {
  createDate: (id: number): string => {
    let baseDate = new Date('2024-01-01T00:00:00Z');

    // Add the ID as days to the base date
    let date = new Date(baseDate);
    date.setDate(baseDate.getDate() + Number(id) - 1); // Adjust for 1-based index

    // Create an Intl.DateTimeFormat object for the desired format
    let formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    // Format the date using the formatter
    let formattedDate = formatter.format(date);

    return formattedDate;
  },

  capitalizeFirstLetter: (text: string) => {
    if (typeof text !== 'string' || text.length === 0) {
      return text;
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  },
};
