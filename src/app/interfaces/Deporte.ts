export interface DeporteResponse {
  id: number,
  nombre: string,
  descripcion: string,
  imagen_nombre?: string,
  imagen?: string
}

export interface DeporteRequest {
  nombre: string,
  descripcion?: string,
  imagen: File
}