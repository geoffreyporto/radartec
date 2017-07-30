const ExceptionMessages = {
  TOO_MANY_QUADRANTS: 'There are more than 4 quadrant names listed in your data. Check the quadrant column for errors.',
  TOO_MANY_RINGS: 'More than 4 rings.',
  MISSING_HEADERS: 'Document is missing one or more required headers or they are misspelled. ' +
  'Check that your document contains headers for "name", "ring", "quadrant", "isNew", "description".',
  MISSING_CONTENT: 'Document is missing content.',
  LESS_THAN_FOUR_QUADRANTS : 'Hay más de 4 nombres de cuadrantes en la lista de sus datos',
  SHEET_NOT_FOUND: '¡Oops! No podemos encontrar la Hoja de Google que has ingresado. ¿Puedes revisar la URL?'
};

module.exports = ExceptionMessages;
