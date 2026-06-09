import Swal from 'sweetalert2';
import type { Locale } from '../../data/types.js';

function withTheme(locale: Locale) {
  return {
    background: '#2b1d48',
    color: '#f4ecff',
    customClass: {
      popup: 'swal-glass-popup',
      title: 'swal-glass-title',
      htmlContainer: 'swal-glass-text',
      confirmButton: 'swal-glass-confirm',
      cancelButton: 'swal-glass-cancel',
      actions: 'swal-glass-actions',
    },
    buttonsStyling: false,
    reverseButtons: true,
    allowOutsideClick: true,
    confirmButtonText: locale === 'en' ? 'Confirm' : 'Confirmar',
    cancelButtonText: locale === 'en' ? 'Cancel' : 'Cancelar',
    showClass: {
      popup: 'swal2-show',
    },
    hideClass: {
      popup: 'swal2-hide',
    },
  } as const;
}

export async function confirmClearFilters(locale: Locale, selectedCount: number) {
  const descriptor = locale === 'en'
    ? `${selectedCount} active ${selectedCount === 1 ? 'filter' : 'filters'}`
    : `${selectedCount} ${selectedCount === 1 ? 'filtro activo' : 'filtros activos'}`;

  const result = await Swal.fire({
    ...withTheme(locale),
    title: locale === 'en' ? 'Clear current filters?' : '¿Borrar los filtros actuales?',
    html: locale === 'en'
      ? `This will reset <strong>${descriptor}</strong> and refresh the drill decks.`
      : `Esto restablecerá <strong>${descriptor}</strong> y recargará los ejercicios.`,
    icon: 'question',
    showCancelButton: true,
    iconColor: '#9f7aea',
    confirmButtonText: locale === 'en' ? 'Clear now' : 'Borrar ahora',
  });

  return result.isConfirmed;
}

export function showFiltersCleared(locale: Locale) {
  return Swal.fire({
    ...withTheme(locale),
    toast: true,
    position: 'top-end',
    timer: 1800,
    timerProgressBar: true,
    showConfirmButton: false,
    icon: 'success',
    title: locale === 'en' ? 'Filters reset' : 'Filtros restablecidos',
    iconColor: '#67e8b4',
  });
}

export function showPracticeFeedback(locale: Locale, kind: 'empty' | 'correct' | 'incorrect') {
  if (kind === 'empty') {
    return Swal.fire({
      ...withTheme(locale),
      toast: true,
      position: 'bottom-end',
      timer: 1700,
      timerProgressBar: true,
      showConfirmButton: false,
      icon: 'info',
      title: locale === 'en' ? 'Choose an option first.' : 'Elige una opción primero.',
      iconColor: '#8ad6ff',
    });
  }

  return Swal.fire({
    ...withTheme(locale),
    toast: true,
    position: 'bottom-end',
    timer: 1800,
    timerProgressBar: true,
    showConfirmButton: false,
    icon: kind === 'correct' ? 'success' : 'error',
    title: kind === 'correct'
      ? locale === 'en' ? 'Nice work. Correct answer!' : 'Buen trabajo. Respuesta correcta.'
      : locale === 'en' ? 'Not quite, try another option.' : 'Casi. Prueba otra opción.',
    iconColor: kind === 'correct' ? '#67e8b4' : '#ff8ea8',
  });
}
