<?xml version="1.0" encoding="utf-8" ?>


<!-- El "Cancionero digital de Gómez Manrique",
     proyecto desarrollado por Andrea Iantorno (mail:andrea.iantorno@gmail.com - Google+:https://plus.google.com/u/0/+AndreaIantorno/about) -->  


<!-- Hoja de estilo XSL creada para transformar el documento 'cancionero_gomez_manrique.xml' en un fichero HTML -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    
    
<xsl:output method="html" version="5" indent="yes" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" />    
    
    
    
<xsl:template match="/TEI">
        
<html>
            
                    
<head>
                
<meta http-equiv="content-type" content="text/html" charset="utf-8" />
                
<title> cGM_transform.xsl </title>
                
</head>
            
                    
<body>
                
<div>    
  
  
<xsl:for-each select="/TEI/text/body/div">

<xsl:copy-of select="."/>       

</xsl:for-each>


</div>
                

    
</body>
            
</html>    
        
</xsl:template>


</xsl:stylesheet>
