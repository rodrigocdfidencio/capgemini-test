import Sequence from '../models/Sequence.js';
import Stats from '../models/Stats.js';
import StatsController from '../controllers/statsController.js';
import isValidSequence from '../utils/validSequence.js';

class SequenceController {
  static verifyLettersSequence = async (req, res) => {
    const letters = req.body;
    const objResultCalculo = isValidSequence(letters);

    const lettersSequenceExists = await Sequence.findOne(letters);

    if (lettersSequenceExists) {
      return res.status(400).json({
        error: 'Bad request',
        message:
          'Sequência já consultada anteriormente, por favor, insira uma sequência diferente',
      });
    }

    let objStatsResponse = await Stats.findOne();
    
    if(objStatsResponse == null) {
        let objStats = {
            "count_valid": 0,
            "count_invalid": 0,
            "ratio": 0.0
        };
        let stats = new Stats(objStats);
        stats.save();
    }

    if (!objResultCalculo.is_valid) {
      res.status(500).send(objResultCalculo);
    } else {
      let sequence = new Sequence(letters);
      sequence.save((err) => {
        if (err) {
          res
            .status(500)
            .json({
              message: `${err.message} - falha ao salvar a sequência, mas a verificação retornou ${objResultCalculo.is_valid}`,
            });
        } else {
            if(objResultCalculo.is_valid == true){
                objStatsResponse.count_valid = count_valid++;
                objStatsResponse.ratio = (count_valid + count_invalid) / count_valid;
            } else {
                objStatsResponse.count_invalid = count_invalid++;
                console.log('entrou');
            }
            let stats = new Stats(objStatsResponse);
            stats.save();
          res.status(201).json(objResultCalculo);
        }
      });
    }
  };
}

export default SequenceController;
