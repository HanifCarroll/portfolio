import type { Assumption, InterventionId } from "./engine";
import type { TuesdayChapter } from "./story";

export const chaptersEs: Record<InterventionId, Omit<TuesdayChapter, "id">> = {
  intake: {
    week: "Semana 1",
    title: "Un solo formulario de ingreso",
    body: [
      "Todas las solicitudes se registran en un solo formulario, sin importar por qué canal llegaron.",
      "En vez de cinco listas, hay una sola cola. El cliente recibe enseguida una confirmación de que su solicitud quedó registrada. En la simulación, esa confirmación evita la mayoría de las solicitudes duplicadas.",
    ],
    stageNote: "Proporción de duplicados en la simulación: del 12 % al 2 %.",
  },
  record: {
    week: "Semana 3",
    title: "Un registro por trabajo",
    body: [
      "La planilla, la pizarra y las notas adhesivas se reemplazan por un registro por trabajo. Todo el equipo consulta el mismo registro y nadie vuelve a escribir los datos.",
      "Fijate cómo se agrupan en el diagrama los datos dispersos en un solo registro compartido.",
    ],
    bodyCompact: [
      "La planilla, la pizarra y las notas adhesivas se reemplazan por un registro por trabajo. Todo el equipo consulta el mismo registro y nadie vuelve a escribir los datos.",
      "Fijate abajo cómo se modifican las cifras de la simulación al incorporar este cambio.",
    ],
    stageNote: "Proporción de asignaciones incorrectas en la simulación: del 18 % al 8 %.",
  },
  dispatch: {
    week: "Semana 5",
    title: "Reglas de asignación",
    body: [
      "El sistema asigna los trabajos nuevos a la persona del equipo que corresponde según la zona y su especialidad.",
      "La persona a cargo de las asignaciones deja de asignar trabajos de memoria y se ocupa de las excepciones.",
    ],
    stageNote: "En la simulación, la asignación tarda unos 25 minutos y no requiere coordinación manual.",
  },
  updates: {
    week: "Semana 7",
    title: "Avisos al cliente antes de que consulte",
    body: [
      "El sistema envía automáticamente las confirmaciones, los rangos de horario de llegada y los avisos de demora.",
      "En la simulación, la mayoría de las llamadas de clientes enojados se debe a que no saben qué está pasando.",
    ],
    stageNote: "En la simulación, los reclamos se reducen más de un 80 %.",
  },
  triage: {
    week: "Semana 9",
    title: "Clasificación del correo con IA",
    body: [
      "El software clasifica las solicitudes que llegan, extrae los datos clave y redacta borradores de respuesta. Una persona confirma; el software escribe el texto.",
      "La simulación incluye errores de clasificación, así que una persona puede intervenir en cualquier decisión automatizada con un clic.",
    ],
    bodyCompact: [
      "El software clasifica las solicitudes que llegan, extrae los datos clave y redacta borradores de respuesta. Una persona confirma; el software escribe el texto.",
      "En la simulación, alrededor de una de cada 25 solicitudes se asigna mal. Los errores quedan a la vista y se pueden corregir.",
    ],
    stageNote: "Atención manual en la simulación: de 18 a 4 minutos por solicitud.",
  },
  dashboard: {
    week: "Semana 11",
    title: "Indicadores de la semana",
    body: [
      "En una pantalla podés ver el volumen semanal, el tiempo de respuesta y los trabajos detenidos.",
      "Antes no se veían las solicitudes olvidadas. El tablero de la simulación muestra todos los trabajos detenidos.",
    ],
    stageNote: "En la simulación, cada trabajo detenido tiene una persona responsable y un contador de tiempo.",
  },
};

export const statementsEs = [
  "Recibís solicitudes por más de dos canales.",
  "Para saber en qué estado está un trabajo, tenés que preguntarle a alguien.",
  "Los mismos datos se escriben más de una vez.",
  "En el último mes, alguien se olvidó de un cliente.",
  "Cuando falta una persona, las solicitudes dejan de avanzar.",
] as const;

export const readoutsEs = [
  {
    headline: "Hay menos señales de problemas en tu forma de trabajar",
    body: "Tus respuestas indican que la coordinación no parece ser lo primero que conviene revisar. Volvé a considerar estas señales a medida que cambie el negocio.",
  },
  {
    headline: "Puede servir revisar cómo trabajan",
    body: "Varios traspasos dependen de la memoria o de repetir tareas. Una revisión breve puede mostrar si el problema está en la forma de trabajar, en las herramientas o en la capacidad del equipo.",
  },
  {
    headline: "Tus respuestas indican riesgos en la operación",
    body: "Con esta forma de trabajar, pueden quedar solicitudes sin atender y pueden fallar los traspasos. Podría convenir cambiar el proceso, sumar software, aumentar la capacidad o combinar esas opciones. El próximo paso es revisar cómo trabajan en la práctica.",
  },
] as const;

export const assumptionsEs: readonly Assumption[] = [
  { parameter: "Demanda", value: "Unas 5 solicitudes por hora; en esta simulación se generan 56 solicitudes" },
  { parameter: "Horarios de mayor demanda", value: "Se multiplica por 1,6 a las 9:00 y a las 13:00" },
  { parameter: "Atención manual", value: "18 min por solicitud" },
  { parameter: "Proporción de asignaciones incorrectas", value: "18 % antes, 4 % después" },
  { parameter: "Solicitudes duplicadas", value: "12 % antes, 2 % después" },
  { parameter: "Cuándo se da una solicitud por olvidada", value: "Después de 4 horas sin que nadie la atienda" },
  { parameter: "Asignación automática", value: "Los trabajos se asignan en unos 25 min, o en 14 con clasificación automática" },
  { parameter: "Capacidad del equipo", value: "Unas 65 solicitudes por día" },
  { parameter: "Empresa", value: "Meridian Facility Services (ficticia), 18 personas" },
];
