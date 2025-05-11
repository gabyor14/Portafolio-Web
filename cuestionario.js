document.getElementById("res").addEventListener("click", function () {
    let correctas = 0;
    const respuestas = {
        p1: "B",
        p2: "C",
        p3: "A",
        p4: "B",
        p5: "A"
    };

    const puntos = [0, 0, 0, 0, 0]; // Array para almacenar los puntos por pregunta

    for (let pregunta in respuestas) {
        let opciones = document.getElementsByName(pregunta);
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked && opciones[i].value === respuestas[pregunta]) {
                correctas++;
                puntos[parseInt(pregunta.substring(1)) - 1] = 1;  // Asignamos 1 punto por cada pregunta correcta
                break;
            }
        }
    }

    let mensaje = "";
    if (correctas === 1) {
        mensaje = "Solo acertaste una... No eres fan de Stranger Things.";
    } else if (correctas === 2) {
        mensaje = "Acertaste 2. Eres un espectador promedio.";
    } else if (correctas === 3) {
        mensaje = "Acertaste 3. Te entretuvo la serie";
    } else if (correctas === 4) {
        mensaje = "Acertaste 4. ¡Te gusta la serie! Bien hecho.";
    } else if (correctas === 5) {
        mensaje = "Acertaste todas ¡Eres un gran fan de Stranger Things!";
    } else {
        mensaje = "No acertaste ninguna... ¿has visto la serie?";
    }

    document.getElementById("mensaje").innerHTML = `<p>${mensaje}</p>`;

    // Generar el gráfico
    generarGrafico(puntos);
});

document.getElementById("pdf").addEventListener("click", function () {
    generarPDF();
});

function generarPDF() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(139, 0, 0);
    doc.text("Respuestas Correctas", doc.internal.pageSize.width / 2, 15, { align: "center" });

    doc.setTextColor(255, 0, 0);
    doc.setFont("helvetica", "normal");

    const contenido = [
        { pregunta: "1. ¿Cómo se llama el mundo alterno de Stranger Things?", respuesta: "Upside Down", correcta: "B" },
        { pregunta: "2. ¿Qué poder tiene Eleven?", respuesta: "Telequinesis", correcta: "C" },
        { pregunta: "3. ¿Cuál es el nombre del Sheriff de Hawkins?", respuesta: "Jim Hopper", correcta: "A" },
        { pregunta: "4. ¿Qué criatura aparece como la amenaza principal en la segunda temporada?", respuesta: "Azotamentes", correcta: "B" },
        { pregunta: "5. ¿Cuál es el nombre real de Eleven?", respuesta: "Jane Ives", correcta: "A" }
    ];

    let posY = 25;
    contenido.forEach((item) => {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.text(item.pregunta, 10, posY);
        posY += 10;

        doc.setFont("helvetica", "normal");
        doc.setTextColor(255, 0, 0);
        doc.text(`Respuesta: ${item.respuesta}`, 10, posY);
        posY += 10;
    });

    const pdfData = doc.output("datauristring");
    const iframe = document.getElementById("pdfIframe");
    iframe.style.display = "block";
    iframe.src = pdfData;
}

function generarGrafico(puntos) {
    const ctx = document.getElementById('grafico').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: [{
                label: 'Puntos obtenidos',
                data: puntos, // Los puntos obtenidos para cada pregunta
                backgroundColor: '#FF6347', // Color de las barras (rojo)
                borderColor: '#FF0000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
