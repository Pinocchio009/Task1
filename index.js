class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  console.log(Triple.description);            
  console.log(Triple.calculate());           
  console.log(Triple.calculate(6));           