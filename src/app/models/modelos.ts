export class ItemDeLista {
    public id: number | undefined;
    public texto: string | undefined;
    public seleccionado: boolean | undefined;
}

export class Informacion { // para alertas o noticias
    public titulo: string | undefined;
    public subtitulo: string | undefined;
    public miniatura = ''; // base64
    public fuente: string | undefined;
    public fecha: Date | undefined;
}

export class Archivo {
    public id: number | undefined;
    public nombre: string | undefined;
    public formato: string | undefined;
    public peso: number | undefined;
    public miniatura: string | undefined;
}
