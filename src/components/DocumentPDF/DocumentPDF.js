import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";
import "../DocumentPDF/DocumentPDF.css";


const DocumentPDF = ({employees}) => {
    <Document>
        {employees.map((employee))}
    </Document>
}