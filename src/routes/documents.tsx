import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { 
  FileText, 
  Download, 
  CheckSquare, 
  BookMarked, 
  FileCheck2,
  FolderOpen,
  Users,
  FolderArchive,
  Loader2,
  ChevronDown,
  ChevronRight,
  FileCode,
  Presentation
} from "lucide-react";
import { useState } from "react";
import JSZip from 'jszip';

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — AgroMind" },
      { name: "description", content: "Download AgroMind project documents: proposals, reports, and student submissions." },
      { property: "og:title", content: "Documents — AgroMind" },
      { property: "og:description", content: "Project proposals, final reports, and student documentation for AgroMind." },
    ],
  }),
  component: DocumentsPage,
});

// Define folder structure based on your actual file structure
const documentStructure = {
  // "Project Proposals": {
  //   icon: BookMarked,
  //   description: "Initial and detailed project proposals",
  //   documents: [
  //     { title: "Initial Project Proposal", desc: "Preliminary project concept and scope", size: "PDF · 2.1 MB", path: "/documents/Proposals/initial-proposal.pdf", type: "pdf" },
  //     { title: "Detailed Research Proposal", desc: "Complete methodology and research plan", size: "PDF · 3.4 MB", path: "/documents/Proposals/detailed-proposal.pdf", type: "pdf" },
  //     { title: "Budget Proposal", desc: "Financial breakdown and resource allocation", size: "PDF · 890 KB", path: "/documents/Proposals/budget-proposal.pdf", type: "pdf" },
  //   ]
  // },
  "Finalized Individual Project Proposals": {
    icon: Users,
    description: "Individual student final reports and submissions",
    documents: [
      { title: "Dilakshan K - IT22339942", desc: "Individual final report and analysis", size: "PDF · 4.2 MB", path: "/documents/Finalized Individual Project proposals/Dilakshan K IT22339942 (1).pdf", type: "pdf" },
      { title: "Wijesinghe M.D.C.M - IT22330932", desc: "Individual final report and findings", size: "PDF · 3.8 MB", path: "/documents/Finalized Individual Project proposals/IT22330932 Wijesinghe M.D.C.M (1).pdf", type: "pdf" },
      { title: "Rodrigo K.A.A.L - IT22364074", desc: "Individual final report and implementation", size: "PDF · 5.1 MB", path: "/documents/Finalized Individual Project proposals/IT22364074_RODRIGOKAAL_G242.pdf", type: "pdf" },
      { title: "Thambugala T.G.H.D - IT22906762", desc: "Individual final report and evaluation", size: "PDF · 3.9 MB", path: "/documents/Finalized Individual Project proposals/IT22906762 Thmbugala T.G.H.D IT4010 Project_Proposal.pdf", type: "pdf" },
    ]
  },
  "Presentations": {
    icon: Presentation,
    description: "Project presentations and slides",
    documents: [
      { 
        title: "Presentation PP1", 
        desc: "Project presentation Phase 1", 
        size: "PDF · 2.5 MB", 
        path: "/documents/Presentation/PP1.pdf",
        type: "pdf"
      },
      { 
        title: "Presentation PP2", 
        desc: "Project presentation Phase 2", 
        size: "PDF · 2.8 MB", 
        path: "/documents/Presentation/PP2.pdf",
        type: "pdf"
      }
    ]
  },
  "Checklist Documents": {
    icon: CheckSquare,
    description: "Checklists and administrative documents",
    documents: [
      { 
        title: "Checklist 1", 
        desc: "Project README and instructions", 
        size: "MD · 120 KB", 
        path: "/documents/25-26J-242 pp1 checklist 1/README (4).md",
        type: "md"
      },
      { 
        title: "Checklist 2", 
        desc: "Project plan checklist", 
        size: "XLSX · 120 KB", 
        path: "/documents/CheckList set 2/AgroMindProjectPlan checklist2.xlsx",
        type: "xlsx"
      }
    ]
  },
  "Final Documentation": {
    icon: FileCode,
    description: "Individual Final Reports and Full project documentation",
    documents: [
      { 
        title: " Final Full Report", 
        desc: "Project documentation and instructions", 
        size: "pdf · 1.6MB", 
        path: "/documents/Final Reports/25-26J-242_IT22906762_Thambugala T.G.H.D_Individual Final Report.pdf",
        type: "pdf"
      },
      { 
        title: "Thambugala T.G.H.D - IT22906762 Individual Final Report", 
        desc: "Project documentation and instructions", 
        size: "pdf · 1.6MB", 
        path: "/documents/Individuals Reports/25-26J-242_IT22906762_Thambugala T.G.H.D_Individual Final Report.pdf",
        type: "pdf"
      },
      { 
        title: "Dilakshan K - IT22339942 Individual Final Report", 
        desc: "Project documentation and instructions", 
        size: "pdf · 1.6MB", 
        path: "/documents/Individuals Reports/25-26J-242_IT22906762_Thambugala T.G.H.D_Individual Final Report.pdf",
        type: "pdf"
      },
      { 
        title: "Rodrigo K.A.A.L - IT22364074 Individual Final Report", 
        desc: "Project documentation and instructions", 
        size: "pdf · 1.6MB", 
        path: "/documents/Individuals Reports/25-26J-242_IT22906762_Thambugala T.G.H.D_Individual Final Report.pdf",
        type: "pdf"
      },
      { 
        title: "Wijesinghe M.D.C.M - IT22330932 Individual Final Report", 
        desc: "Project documentation and instructions", 
        size: "pdf · 1.6MB", 
        path: "/documents/Individuals Reports/25-26J-242_IT22906762_Thambugala T.G.H.D_Individual Final Report.pdf",
        type: "pdf"
      }
    ]
  }
};

// Helper function to get file extension and proper filename
const getFileInfo = (filePath: string, title: string) => {
  const extension = filePath.split('.').pop() || 'pdf';
  const cleanTitle = title.replace(/[\\/:*?"<>|]/g, '_');
  const fileName = `${cleanTitle}.${extension}`;
  return { extension, fileName };
};

// Helper function to handle single file download
const handleDownload = async (filePath: string, title: string, fileType: string) => {
  try {
    console.log(`Attempting to download: ${filePath}`);
    
    // For PDF files, use direct download with anchor tag
    if (fileType === 'pdf') {
      // Create an anchor element and trigger download
      const link = document.createElement('a');
      link.href = filePath;
      link.download = `${title}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(`Download initiated for: ${title}`);
      alert(`Download started for ${title}`);
    } else {
      // For other files, use fetch
      const response = await fetch(filePath, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const { fileName } = getFileInfo(filePath, title);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log(` Successfully downloaded: ${fileName}`);
      alert(`Successfully downloaded ${title}!`);
    }
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback method - open in new tab
    if (fileType === 'pdf') {
      window.open(filePath, '_blank');
      alert(`Opening ${title} in new tab. Please use browser save option.`);
    } else {
      alert(`Failed to download ${title}. Please try right-click and "Save Link As" on the file link.`);
    }
  }
};

// Helper function to download entire folder as ZIP
const downloadFolderAsZip = async (folderName: string, documents: any[]) => {
  const zip = new JSZip();
  const folder = zip.folder(folderName);
  
  let successCount = 0;
  let failCount = 0;
  const failedFiles: string[] = [];

  const downloadPromises = documents.map(async (doc) => {
    try {
      console.log(`Fetching: ${doc.path}`);
      const response = await fetch(doc.path, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const { fileName } = getFileInfo(doc.path, doc.title);
        folder?.file(fileName, blob);
        successCount++;
        console.log(` Added to ZIP: ${doc.title}`);
      } else {
        failCount++;
        failedFiles.push(doc.title);
        console.error(` Failed to fetch ${doc.title}: ${response.status}`);
      }
    } catch (error) {
      failCount++;
      failedFiles.push(doc.title);
      console.error(` Error downloading ${doc.title}:`, error);
    }
  });

  try {
    await Promise.all(downloadPromises);
    
    if (successCount === 0) {
      alert(`No files could be downloaded. Please check if the files exist.\n\nFailed files: ${failedFiles.join(', ')}`);
      return;
    }
    
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = window.URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${folderName.replace(/\s/g, '_')}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    if (failCount > 0) {
      alert(` Created ZIP with ${successCount} file(s).\n\n Failed to download ${failCount} file(s):\n${failedFiles.join('\n')}`);
    } else {
      alert(` Successfully downloaded all ${successCount} files as ZIP!`);
    }
  } catch (error) {
    console.error('Failed to create ZIP:', error);
    alert('Failed to create ZIP file. Please try again.');
  }
};

// Folder component with download all functionality
function DocumentFolder({ 
  folderName, 
  icon: Icon, 
  description,
  documents, 
  defaultOpen = false 
}: { 
  folderName: string; 
  icon: any; 
  description: string;
  documents: any[]; 
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    await downloadFolderAsZip(folderName, documents);
    setIsDownloading(false);
  };

  // Get icon based on file type
  const getFileIcon = (fileType: string) => {
    switch(fileType) {
      case 'md':
      case 'txt':
        return FileCode;
      case 'xlsx':
        return FileCheck2;
      default:
        return FileText;
    }
  };

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-gradient-card hover:border-primary/30 transition-smooth">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <h3 className="font-bold text-xl">{folderName}</h3>
                <span className="text-xs text-muted-foreground">
                  ({documents.length} files)
                </span>
                {isOpen ? 
                  <ChevronDown className="w-4 h-4 text-muted-foreground" /> : 
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                }
              </button>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          
          <button
            onClick={handleDownloadAll}
            disabled={isDownloading}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:shadow-glow transition-smooth disabled:opacity-50"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <FolderArchive className="w-4 h-4" />
            )}
            {isDownloading ? 'Creating ZIP...' : 'Download All'}
          </button>
        </div>
        
        {isOpen && (
          <div className="mt-4 space-y-3 animate-fade-up">
            {documents.map((doc, idx) => {
              const FileIcon = getFileIcon(doc.type);
              return (
                <div 
                  key={doc.title} 
                  className="bg-background/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-smooth"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <FileIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{doc.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{doc.desc}</p>
                        <p className="text-xs text-muted-foreground/70 mt-2">{doc.size}</p>
                        <p className="text-xs text-muted-foreground/50 mt-1 font-mono hidden md:block">{doc.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.path, doc.title, doc.type)}
                      className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-smooth"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function DocumentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project Documentation"
        title="Project Documents"
        description="Access and download all project proposals, individual reports, and final deliverables."
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {Object.entries(documentStructure).map(([folderName, folderData]) => (
            <DocumentFolder
              key={folderName}
              folderName={folderName}
              icon={folderData.icon}
              description={folderData.description}
              documents={folderData.documents}
              defaultOpen={folderName === "Presentations" || folderName === "Finalized Individual Project Plan"}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}