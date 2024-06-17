function generateImpactAnalysis() {
    const regulationType = document.getElementById('regulation-type').value;
    const version = document.getElementById('version').value;
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];
 
    if (!file1 || !file2) {
        alert('Please upload both files.');
        return;
    }
 
    // Logic to handle the file upload and impact analysis
    console.log('Regulation Type:', regulationType);
    console.log('Version:', version);
    console.log('File 1:', file1.name);
    console.log('File 2:', file2.name);
 
    alert('Impact Analysis Generated');
}