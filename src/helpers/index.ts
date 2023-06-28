export function formatearFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    return fechaObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}